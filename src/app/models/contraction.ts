export class Contraction {
  index: number;
  startTime: number;
  endTime?: number;
  timeSince?: string;
  
  constructor(fields: Partial<Contraction>) {
    Object.assign(this, fields);
  }

  get duration(): string {
    if (this.endTime) {
      const duration = (this.endTime - this.startTime) / 1000;
      return `${duration.toFixed(1)} ${duration === 1 ? 'sec' : 'secs'}`;
    } else {
      return 'N/A';
    }
  }
}