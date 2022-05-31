const levelOrder = (root) => {
    // If root is null return an empty array
    if(!root) return []
    
    const queue = [root] // initialize the queue with root
    const levels = [] // declare output array
    
    while(queue.length !== 0){
       const queueLength = queue.length // Get the length prior to dequeueing
       const currLevel = [] // Declare this level
       // loop through to exhaust all options and only to include nodes at currLevel
       for(let i = 0; i < queueLength; i++){
           // Get next node
           const current = queue.splice(0,1)[0]
           
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           // After we add left and right for current, we add to currLevel
           currLevel.push(current.val)
       }
       // Level has been finished. Push into output array
       levels.push(currLevel)
   }
    return levels
}

// solution from https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/472672/Javascript-Detailed-line-by-line-solution