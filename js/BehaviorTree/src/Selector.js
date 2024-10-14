// import { SUCCESS, FAILURE } from './constants.js'
// import BranchNode from './BranchNode.js'

var Selector = class  extends BranchNode {
  nodeType = 'Selector'
  START_CASE = FAILURE
  OPT_OUT_CASE = SUCCESS
}
