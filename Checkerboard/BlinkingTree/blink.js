document.addEventListener('DOMContentLoaded', () => {
    const treeContainer = document.getElementById('tree');

    const renderTree = (node, container) => {
        if (node !== null) {
            const nodeElement = document.createElement('div');
            nodeElement.className = 'node';
            nodeElement.textContent = node.value;
            container.appendChild(nodeElement);

            if (node.left !== null || node.right !== null) {
                const childContainer = document.createElement('div');
                childContainer.className = 'tree';
                renderTree(node.left, childContainer);
                renderTree(node.right, childContainer);
                container.appendChild(childContainer);
            }
        }
    };

    renderTree(tree.root, treeContainer);

    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        setInterval(() => {
            node.classList.toggle('blink');
        }, (index + 1) * 1000);
    });
});
