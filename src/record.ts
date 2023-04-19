export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Ibaraki' | 'Fukuoka' | "Chiba";

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
    Ibaraki: { kanji_name: '茨城', confirmed_cases: 242 },
    Fukuoka: { kanji_name: '福岡', confirmed_cases: 481 },
    Chiba: { kanji_name: '千葉', confirmed_cases: 333 },
}