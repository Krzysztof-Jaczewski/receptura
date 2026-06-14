import { DosageForm } from '@/types/types';

export const dosageForms = [
    { value: 'ointment', label: 'Maść' },
    { value: 'solution', label: 'Płyn' },
    { value: 'emulsion', label: 'Emulsja' },
    { value: 'drops', label: 'Krople' },
] as const;

export const dosageFormTests: Record<DosageForm, string[]> = {
    ointment: [
        'Stwierdzono jednorodną strukturę preparatu bez grudek i aglomeratów.',
        'Stwierdzono prawidłową konsystencję i brak oznak rozwarstwienia.',
    ],

    solution: [
        'Stwierdzono klarowność roztworu, bez widocznych zanieczyszczeń.',
        'Stwierdzono całkowite rozpuszczenie składników i jednorodność preparatu.',
    ],

    emulsion: [
        'Stwierdzono brak rozdzielenia faz w czasie niezbędnym do podania dawki leku.',
        'Stwierdzono utrzymanie jednorodności emulsji po wstrząśnięciu.',
    ],

    drops: [
        'Stwierdzono jednorodność preparatu w zakresie dawki kroplowej.',
        'Nie stwierdzono obecności osadu po wstrząśnięciu.',
    ],
};
