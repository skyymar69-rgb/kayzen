export class AuditService {
  async runAudit(url: string) {
    return {
      id: 'audit-' + Date.now(),
      url,
      score: Math.random() * 100,
      errors: [],
      timestamp: new Date(),
    }
  }

  async analyzeContent(html: string) {
    return {
      headings: [],
      links: [],
      images: [],
      performance: {
        speedIndex: 0,
        firstContentfulPaint: 0,
      },
    }
  }
}

export default new AuditService()
