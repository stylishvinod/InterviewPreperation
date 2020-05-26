
//refer noted.js to know different cases to find connected components.

//case 1: Quick search

var countComponents = function(n, edges) {
    let arr = new Array(n).fill(null).map((a,i) => i);
    let components = n;
    
    for(const [u,v] of edges) {
        
        if(arr[u] !== arr[v]) {
            const uRoot = arr[u];
            const vRoot = arr[v];
            
            for(let i=0; i < arr.length; i++) {
                if(arr[i] === vRoot) {
                    arr[i] = uRoot;
                    
                }
            }
            components--;
            
        }
        
    }
    return components;
    
};

// Case 2: Quick union

const find = (componentIds, node) => {
    while(componentIds[node] !== node) {
        node = componentIds[node];
    }
    return node;
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // Initialzie 
    const componentIds = [];
    for (let i=0; i < n; i++) {
        componentIds[i] = i;
    }
    
    let components = n;
    
    // process each edge
    for (const [u, v] of edges) {
        // check if religion conversion is required
        // let's decide to use u's religion
        const uRoot = find(componentIds, u);
        // Change religion of v's family
        const vRoot = find(componentIds, v);        
        if(uRoot !== vRoot) {
            // need to perform change
            components--; // reduce total count            
            componentIds[vRoot] = uRoot;                       
        }
    }
    return components;
};


//  case:3 Weited quick union by size

var countComponents = function(n, edges) {
    let arr = new Array(n).fill(null).map((a,i) => i);
    let size = new Array(n).fill(1);
    let components = n;
    
    for(const [u,v] of edges) {
        const uRoot = search(arr, u)
            const vRoot = search(arr, v);
        
        if(uRoot !== vRoot) {
        
            if(size[uRoot] > size[vRoot]) {
                arr[vRoot] = uRoot;
                size[uRoot] += size[vRoot];
            } else {
                arr[uRoot] = vRoot;
                size[vRoot] += size[uRoot];
            }
            
            components--
        }
        
    }
    return components;
    
};

const search = (arr, tmp) => {
    while(tmp !== arr[tmp]) {
                tmp = arr[tmp];
            }
    
    return tmp;
}

// type:4 

const find = (componentIds, node) => {
    // base case, if node is head of the family
    if (componentIds[node] === node) {
        return node;
    }
    const root = find(componentIds, componentIds[node]);
    
    // perform write
    componentIds[node] = root;
    
    return root;
}
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    // Initialzie 
    const componentIds = [];
    for (let i=0; i < n; i++) {
        componentIds[i] = i;
    }
    const size = [];
    for (let i=0; i < n; i++) {
        size[i] = 1;
    }    
    
    let components = n;
    
    // process each edge
    for (const [u, v] of edges) {
        // check if religion conversion is required
        // let's decide to use u's religion
        const uRoot = find(componentIds, u);
        // Change religion of v's family
        const vRoot = find(componentIds, v);  
        
        
        if(uRoot !== vRoot) {
            // need to perform change
            components--; // reduce total count  
            
            // size with high members will be new religion
            if(size[uRoot] > size[vRoot]) {
                // uRoot is new religion
                componentIds[vRoot] = uRoot;
                size[uRoot] =  size[uRoot] + size[vRoot]; // size of uRoot
            } else {
                // vRoot is new religion
                componentIds[uRoot] = vRoot;
                size[vRoot] += size[uRoot]; // size uRoot
            }
        }
    }
    return components;
};