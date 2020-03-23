
//https://leetcode.com/problems/n-ary-tree-preorder-traversal/

//Method::1
const preorder = function (root) {
    const res = [], stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        if (!curr) continue;
        res.push(curr.val);
        for (let i = curr.children.length - 1; i >= 0; i--) {
            stack.push(curr.children[i])
        }
    }
    return res;
};


// Method::2
const preorder = function (root) {
    const res = [], stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        if (!curr) continue;
        res.push(curr.val);
        stack.push(...curr.children.reverse())
    }
    return res;
};

// method::3
const preorder = function (root) {
    const stack = [root]
    const result = []

    while (stack.length > 0) {
        const node = stack.pop()

        result.push(node.val)

        if (node && node.children.length > 0) {
            if (node.children.length > 1) {
                const reverse = [...node.children]

                for (let i = 0; i < Math.floor(node.children.length / 2); i++) {
                    const temp = reverse[reverse.length - (i + 1)]
                    reverse[reverse.length - (i + 1)] = reverse[i]
                    reverse[i] = temp
                }

                reverse.forEach(vertex => stack.push(vertex))
            } else {
                stack.push(node.children[0])
            }
        }
    }

    return result;
}