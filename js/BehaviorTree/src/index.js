import BehaviorTree, { getRegistry, registryLookUp } from './BehaviorTree.js'
// import * as decorators from './decorators.js'

import BehaviorTreeImporter from './BehaviorTreeImporter.js'

import BranchNode from './BranchNode.js'
import Node from './Node.js'
import Selector from './Selector.js'
import Sequence from './Sequence.js'
import Random from './Random.js'
import Decorator from './Decorator.js'
import Task from './Task.js'
import Introspector from './Introspector.js'

import { SUCCESS, FAILURE, RUNNING } from './constants.js'

export default BehaviorTree

export {
  BehaviorTree,
  SUCCESS,
  FAILURE,
  RUNNING,
  getRegistry,
  registryLookUp,
  BehaviorTreeImporter,
  BranchNode,
  Node,
  Selector,
  Sequence,
  Random,
  Decorator,
  Task,
  Introspector,
  // decorators
}
