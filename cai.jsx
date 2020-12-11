let arr = [
  { 
    id: '0',
    title: '123',
  },
  { 
    id: '1',
    title: '456',
  },
  {
    id: '2',
    title: '789',
    child: [
      {
        id: '2-1',
        title: 'zxc',
      },
      {
        id: '2-2',
        title: 'asd',
      },
      {
        id: '2-3',
        title: 'qwe',
      },
    ]
  }
]

(
  <DoSelect
    mode="multiple"
    allowClear
    showSearch
    optionFilterProp={'label'}
    style={{width:'100%'}}
    onChange={handleChange}
    placeholder={'请选择服务目录'}
  >
    {
      ar.map(item => {
        if(!Object.prototype.toString.call(item.child).includes('Array')){
          return (
            <DoSelect.Option key={item.id} value={item.title}>
              {item.title}
            </DoSelect.Option>
          )
        }
        return (
          <Fragment key={item.id}>
            {
              item.child.map(val => {
                <DoSelect.Option key={val.id} value={item.title}>
                  {item.title}
                </DoSelect.Option>
              })
            }
          </Fragment>
        )
      })
    }
  </DoSelect>

)