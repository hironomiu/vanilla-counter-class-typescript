import Model from '../ts/modules/model'

describe('Model', () => {
  it('increment', () => {
    const model = new Model()
    model.increment()
    expect(model.count).toBe(1)
  })
})
