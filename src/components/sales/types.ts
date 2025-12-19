export interface Match {
  id: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  isLive?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Promo {
  code: string;
  discount: string;
  description: string;
}
