import assert from 'assert' // para testes unitários nativos

export default function mapAPI(){
    const itemObj = {'name':'clipper'}
    const itemMap = new Map([
        ['name','clipper']
    ])

    itemObj.birthDay = '21/12/1965'
    assert.ok(itemObj.birthDay === '21/12/1965')

    itemMap.set('birthDay', '21/12/1965')
    assert.deepStrictEqual(itemMap.get('birthDay'), '21/12/1965')
    
    assert.ok(itemObj.hasOwnPropety('birthDay'))
}