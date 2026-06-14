import { Sterility } from '@/types/types';

export const preparationSteps: Record<
    Sterility,
    {
        room: string[];
        staff: string[];
    }
> = {
    nonSterile: {
        room: [
            'Sprawdzono czystość oraz przygotowanie stanowiska pracy do wykonania leku.',
            'Wykonano dezynfekcję powierzchni roboczej środkiem alkoholowym (ok. 70%).',
            'Przygotowano niezbędny sprzęt recepturowy oraz opakowania.',
            'Zweryfikowano stan techniczny urządzeń wykorzystywanych w procesie sporządzania.',
            'Sprawdzono termin ważności oraz oznakowanie surowców farmaceutycznych.',
        ],
        staff: [
            'Wykonano higieniczne mycie rąk przez personel przed rozpoczęciem pracy.',
            'Założono odzież ochronną przeznaczoną do pracy w recepturze aptecznej.',
            'Zabezpieczono włosy oraz zastosowano środki ochrony indywidualnej w razie potrzeby.',
            'Wykonano dezynfekcję rąk preparatem alkoholowym przed rozpoczęciem czynności.',
        ],
    },

    sterile: {
        room: [
            'Przygotowano i zdezynfekowano komorę laminarną zgodnie z procedurą aseptyczną.',
            'Wykonano dezynfekcję obszaru roboczego od strefy najwyższej czystości do zewnętrznej.',
            'Uruchomiono komorę laminarną i przeprowadzono jej wyjaławianie przez wymagany czas.',
            'Przygotowano wyłącznie jałowy lub wyjałowiony sprzęt oraz opakowania.',
            'Zapewniono utrzymanie warunków aseptycznych oraz ograniczenie dostępu do strefy pracy.',
        ],
        staff: [
            'Wykonano higieniczne mycie rąk zgodnie z techniką mycia rąk.',
            'Założono odzież dedykowaną do pracy w warunkach jałowych.',
            'Założono czepek, maskę oraz środki ochrony indywidualnej wymagane dla aseptyki.',
            'Wykonano ponowną dezynfekcję rąk preparatem alkoholowym.',
            'Założono jałowy fartuch oraz jałowe rękawice w warunkach aseptycznych.',
        ],
    },
};
