export default function appendToEachArrayValue(array, appendString) {
    const ArrayOutput = [];
    for (const value of array) {
      ArrayOutput.push(`${appendString}${value}`);
    }
    return ArrayOutput;
}
