const TreeNode = function(val, left=null, right=null) {
	this.val = val;
	this.left = left
  this.right = right
}

const cutInLevel = function (arr) {
  // 对arr的元素进行分层[1, 2, 3, 4, 5, 6, 7, 8] => [[1], [2, 3], [4, 5, 6, 7], [8]]
  const levelArr = []
  let i = 0
  while (true) {
    levelArr[i] = []
    const start = Math.pow(2, i) - 1
    if ((Math.pow(2, i + 1) - 2) >= arr.length) {
      levelArr[i].push(...arr.slice(start))
      break
    } else {
      levelArr[i].push(...arr.slice(start, Math.pow(2, i + 1) - 1))
    }
    i++
    if ((Math.pow(2, i) - 1) >= arr.length) break
  }
  return levelArr
}

const createLevelTreeNode = function (levelArr, childNodes=[]) {
  let nodes = []
  for (let i = 0; i < levelArr.length; i++) {
    if (levelArr[i]) {
      let treeNode = new TreeNode(levelArr[i])
      const leftChild = 2 * i
      if (childNodes.length > leftChild) {
        treeNode.left = childNodes[leftChild]
      }
      const rightChild = 2 * i + 1
      if (childNodes.length > rightChild) {
        treeNode.right = childNodes[rightChild]
      }
      nodes.push(treeNode)
    } else {
      nodes.push(null)
    }
  }
  return nodes
}

const createTree = function (arr) {
  arr = cutInLevel(arr)
  let nodes = []
  for (let i = arr.length - 1; i >= 0; i--) {
    nodes = createLevelTreeNode(arr[i], nodes)
    // console.log('111111111: ', i, nodes)
  }
  return nodes[0]
}

const preOrder = function (root) {
  // 前置遍历，根节点，左节点，右节点
  const recursion = function (root, res) {
    if (!root) return
    res.push(root.val)
    if (root.left) {
      recursion(root.left, res)
    }
    if (root.right) {
      recursion(root.right, res)
    }
  }
  const iterate = function (root) {
    if (!root) return
    const stack = [root]
    let res = []
    while (stack.length) {
      let cur = stack.shift()
      res.push(cur.val)
      if (cur.right) {
        stack.unshift(cur.right)
      }
      if (cur.left) {
        stack.unshift(cur.left)
      }
    }
    return res
  }
  let res1 = []
  recursion(root, res1)
  let res2 = iterate(root)
  return res2
}

const inOrder = function (root) {
  // 中序遍历，顺序是 左节点，根节点，右节点
  const recursion = function (root, res) {
    if (!root) return
    if (root.left) {
      recursion(root.left, res)
    }
    res.push(root.val)
    if (root.right) {
      recursion(root.right, res)
    }
  }
  const iterate = function (root) {
    if (!root) return []
    let stack = []
    let p = root
    let res = []
    while (p || stack.length) {
      if (p) {
        stack.push(p)
        p = p.left
      } else {
        let node = stack.pop()
        res.push(node.val)
        p = node.right
      }
    }
    return res
  }
  let res1 = []
  recursion(root, res1)
  let res2 = iterate(root)
  return res2
}

const postOrder = function (root) {
  // 后序遍历，顺序是：左节点，右节点，根节点
  const recursion = function (root, res) {
    if (!root) return
    if (root.left) {
      recursion(root.left, res)
    }
    if (root.right) {
      recursion(root.right, res)
    }
    res.push(root.val)
  }
  const iterate = function (root) {
    // 先逆后续访问：根节点，右节点，左节点
    // 然后再反转结果即为后续遍历的结果
    if (!root) return
    let stack = [root]
    let res = []
    while (stack.length) {
      let cur = stack.pop()
      res.push(cur.val)
      if (cur.left) stack.push(cur.left)
      if (cur.right) stack.push(cur.right)
    }
    return res.reverse()
  }
  let res1 = []
  recursion(root, res1)
  let res2 = iterate(root)
  return res2
}

const levelOrder = function (root) {
  // 层序遍历
  if (!root) return
  let stack = [root]
  let res = []
  while (stack.length) {
    let curLevel = []
    while (stack.length) {
      let curNode = stack.pop()
      res.push(curNode.val)
      if (curNode.right) {
        curLevel.push(curNode.right)
      }
      if (curNode.left) {
        curLevel.push(curNode.left)
      }
    }
    stack = curLevel
  }
  return res
}

// const testI = [1, 2, null, 4, 5, null, null, 6, 7, 8, 9]
// const root = createTree(testI)
// console.log(levelOrder(root))
module.exports = {
  createTree,
  preOrder,
  inOrder,
  postOrder,
  levelOrder
}