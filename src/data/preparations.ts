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
            'Wykonano dezynfekcję powierzchni roboczej środkiem na bazie alkoholu (ok. 70%).',
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
'Sprawdzono termin ważności oraz oznakowanie surowców farmaceutycznych.',
            'Uruchomiono komorę laminarną i przeprowadzono jej wyjaławianie przez 30 min.',
            'Przygotowano wyłącznie jałowy lub wyjałowiony sprzęt oraz opakowania.',
            'Zapewniono utrzymanie warunków aseptycznych oraz ograniczenie dostępu do strefy pracy.',
        ],
        staff: [
            'Wykonano higieniczne mycie rąk zgodnie z techniką higienicznego mycia rąk.',
'Wykonano dezynfekcję rąk preparatem do chirurgicznej dezynfekcji skóry(Manusan)',
            'Zalożono zestaw odzieży wymagany do pracy w warunkach aseptycznych(fatuch, czepek,maska ochnonna, ochraniacze na buty)',
            'Wykonano dezynfekcję rąk preparatem do chirurgicznej dezynfekcji skóry(Manusan)',
'Założono jałowe rękawice przystapiono do pracy w warunkach aseptycznych',
        ],
    },
};
