// import { SUCCESS, FAILURE } from './constants.js'
// import BranchNode from './BranchNode.js'

var Sequence = class  extends BranchNode {
  nodeType = 'Sequence'
  START_CASE = SUCCESS
  OPT_OUT_CASE = FAILURE
}
