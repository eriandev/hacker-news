import { Pipe, PipeTransform } from '@angular/core';
import { DATE_UNITS } from '../utils/constants';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  transform(value?: string | null): string {
    return value ? this.getTimeAgo(value) : '';
  }

  private getSecondsDiff(timestamp: Date) {
    return (Date.now() - timestamp.getTime()) / 1000;
  }

  private getUnitAndValueDate(secondsElapsed: number): any {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
      if (secondsElapsed >= secondsInUnit || unit === 'second') {
        const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
        return { value, unit };
      }
    }
  }

  private getTimeAgo(timestamp: string): string {
    if (timestamp) {
      const rtf = new Intl.RelativeTimeFormat('en', { style: 'long' });
      const secondsElapsed = this.getSecondsDiff(new Date(timestamp));
      const { value, unit } = this.getUnitAndValueDate(secondsElapsed);
      return rtf.format(value, unit);
    }
    return 'At an unknown time';
  }
}
