/* eslint-env jest */
import { RUNNING, SUCCESS, FAILURE } from '../constants.js'
import InvertDecorator from './InvertDecorator.js'
import Task from '../Task.js'

describe('InvertDecorator', () => {
  const task = new Task({
    run(blackboard) {
      return blackboard.result
    }
  })
  let invertedTask

  beforeEach(() => {
    invertedTask = new InvertDecorator({ node: task })
  })

  it('has a nodeType', () => {
    expect(invertedTask.nodeType).toEqual('InvertDecorator')
  })

  it('inverts SUCCESS and FAILURES', () => {
    expect(invertedTask.run({ result: SUCCESS })).toEqual(FAILURE)
    expect(invertedTask.run({ result: FAILURE })).toEqual(SUCCESS)
  })

  it('does not change RUNNING responses', () => {
    expect(invertedTask.run({ result: RUNNING })).toEqual(RUNNING)
  })
})
