class Tracker {
    _trackPageview(): void;
    _getName(): string;
    _getAccount(): string;
    _getVersion(): string;
    _getVisitorCustomVar(index: number); string;
    _setAccount(): string;
    _setCustomVar(index: number, name: string, value: string, opt_scope?: number): bool;
    _setSampleRate(newRate: string): void;
    _setSessionCookieTimeout(cookieTimeoutMillis: number): void;
    _setSiteSpeedSampleRate(sampleRate: number): void;
    _setVisitorCookieTimeout(milliseconds: number): void;
    _trackPageLoadTime(): void;
}

interface GoogleAnalyticsCode {
    push(commandArray: string[]): void;
    push(Function): void;
}

interface GoogleAnalyticsTracker {
    _getTracker(account: string): Tracker;
    _createTracker(opt_account: string, opt_name?: string): Tracker;
    _getTrackerByName(opt_name?: string): Tracker;
    _anonymizeIp(): void;
}

interface GoogleAnalytics {
    type: string;
    src: string;
    async: bool;
}

declare var ga: GoogleAnalytics;
declare var _gaq: GoogleAnalyticsCode;
declare var _gat: GoogleAnalyticsTracker;
