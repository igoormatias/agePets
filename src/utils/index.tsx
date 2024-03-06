export function calculateCanineAge(humanAge: number, weigth: number): number {

    let canineAge: number;

    if (humanAge <= 5) {
        // Para cães com até 5 anos de idade
        canineAge = humanAge * 7.2; // 7 anos por ano até 5 anos
    } else {
        let ageFactor: number;
        let weightFactor: number;

        if (weigth <= 10) {
            weightFactor = 4;
        } else if (weigth <= 25) {
            weightFactor = 5;
        } else {
            weightFactor = 6;
        }

        if (humanAge <= 10) {
            ageFactor = humanAge - 5;
        } else {
            ageFactor = 5 + (humanAge - 10) * 0.5;
        }

        canineAge = 35 + (ageFactor * weightFactor);
    }

    return parseInt(canineAge.toFixed(0));
}

export function calculateFelineAge(humanAge: number, weight: number): number {
    let felineAge: number;

    const ageFactor = humanAge <= 2 ? 24 : 24 + (humanAge - 2) * 4;
    const weightFactor = weight <= 5 ? 4 : weight <= 10 ? 6 : 8;

    felineAge = ageFactor + weightFactor * (humanAge - 2);

    return felineAge;
}