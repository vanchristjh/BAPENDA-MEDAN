import prisma from "@/lib/prisma";
import { AuditService } from "./audit";

export class TaxService {
  /**
   * Cek Tagihan Pajak (PBB) Berdasarkan NOP
   */
  static async getTaxBillByNOP(nop: string) {
    try {
      const cleanNop = nop.trim().slice(0, 32);
      const taxObject = await prisma.taxObject.findUnique({
        where: { nop: cleanNop },
        select: {
          nop: true,
          name: true,
          address: true,
          type: true,
          status: true,
          payments: {
            select: { amount: true, status: true, taxPeriod: true },
            orderBy: { createdAt: 'desc' },
            take: 50,
          }
        }
      });

      if (!taxObject) throw new Error("Nomor Objek Pajak tidak ditemukan.");

      const pendingPayments = taxObject.payments.filter(p => p.status === 'PENDING' || p.status === 'EXPIRED');

      return {
        success: true,
        data: {
          objectInfo: {
            nop: taxObject.nop,
            name: taxObject.name,
            address: taxObject.address,
            type: taxObject.type,
            status: taxObject.status,
          },
          pendingAmount: pendingPayments.reduce((acc, curr) => acc + Number(curr.amount), 0),
          recentPayments: []
        }
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Internal Error";
      return { success: false, error: msg };
    }
  }

  /**
   * Simulasi Pajak (PBB & BPHTB)
   */
  static async calculateSimulation(type: string, value: number) {
    const rate = type === 'PBB' ? 0.003 : 0.05; 
    const result = value * rate;

    return {
      success: true,
      data: {
        simulationResult: result,
        breakdown: [
          { label: "Nilai Dasar (NJOP)", value },
          { label: "Tarif Pajak (%)", value: rate * 100 },
          { label: "Total Estimasi", value: result }
        ]
      }
    };
  }

  /**
   * Create E-Billing Code
   */
  static async createBillingCode(taxObjectId: string, amount: number, userId: string, taxPeriod: string) {
    const invoiceNumber = `BILL-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    try {
      const payment = await prisma.payment.create({
        data: {
          invoiceNumber,
          amount,
          status: "PENDING",
          taxPeriod,
          taxObjectId,
          userId,
          expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000), 
        },
      });

      await AuditService.log({
        userId,
        action: "CREATE_BILLING",
        table: "Payment",
        recordId: payment.id,
        newValue: payment,
      });

      return { success: true, data: payment };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Internal Error";
      return { success: false, error: msg };
    }
  }

  /**
   * Process Payment (Mock)
   */
  static async processPayment(paymentId: string, method: string) {
    try {
      const oldPayment = await prisma.payment.findUnique({ where: { id: paymentId } });

      const payment = await prisma.payment.update({
        where: { id: paymentId },
        data: {
          status: "PAID",
          method,
          paidAt: new Date(),
        },
      });

      await AuditService.log({
        userId: payment.userId,
        action: "PROCESS_PAYMENT_MOCK",
        table: "Payment",
        recordId: payment.id,
        oldValue: oldPayment,
        newValue: payment,
      });

      return { success: true, data: payment };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Internal Error";
      return { success: false, error: msg };
    }
  }
}
