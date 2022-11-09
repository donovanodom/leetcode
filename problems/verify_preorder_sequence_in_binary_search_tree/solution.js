const verifyPreorder = function(preorder, min = null, max = null) {
        if(!preorder.length) return
        let val = preorder[0]
        if(min && val <= min || max && val >= max) return
        preorder.shift()
        verifyPreorder(preorder, min, val)
        verifyPreorder(preorder, val, max)
        return !preorder.length
}
