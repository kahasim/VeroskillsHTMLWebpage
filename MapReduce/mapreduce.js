
const fs = require('fs');

// Read the input file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // 1. Map Step: Split the content into lines, then into words, and create key-value pairs
    const sentences = data.split('\n');
    const map = sentences.map(sentence => {
        return sentence.split(' ').map(word => {
            return { key: word, value: 1 };
        });
    });

    // Flatten the array of arrays into a single array
    const mapped = [].concat(...map);

    // 2. Reduce Step: Aggregate the key-value pairs by word
    const reduce = mapped.reduce((acc, curr) => {
        acc[curr.key] = (acc[curr.key] || 0) + curr.value;
        return acc;
    }, {});

    // Prepare the output content
    const output = Object.keys(reduce).map(key => {
        return `${key}: ${reduce[key]}`;
    }).join('\n');

    // Write the output to a file
    fs.writeFile('output.txt', output, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Word count has been written to output.txt');
    });
});
