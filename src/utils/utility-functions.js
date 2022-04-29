function requiredValiidator(value) {
    return value.trim() != '';
}

function emailValidator(value) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(value);
}

export const ValidatorList = {
    requiredValiidator,
    emailValidator
}
