export function generateUUID(): string {
    const hexChars: string[] = [];
    for (let i = 0; i < 36; i++) {
        hexChars[i] = Math.floor(Math.random() * 16).toString(16);
    }
    hexChars[14] = "4"; // 14th character should be '4' to signify UUID version 4
    hexChars[19] = ((parseInt(hexChars[19], 16) & 0x3) | 0x8).toString(16); // 19th character should be '8', '9', 'a', or 'b'
    hexChars[8] = hexChars[13] = hexChars[18] = hexChars[23] = "-"; // Inserting hyphens
    return hexChars.join("");
}
