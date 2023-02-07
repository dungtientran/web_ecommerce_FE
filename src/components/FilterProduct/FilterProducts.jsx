import React from 'react';
import './FilterProduct.css';
import { Collapse, Radio } from 'antd';
import { useSelector } from 'react-redux';


const FilterProduct = ({ productSort, productCategory }) => {

  const { categoryProduct } = useSelector(state => state.homeData);
  console.log(categoryProduct)
  return (
    <div>
      <Collapse ghost={true} defaultActiveKey={['0', '1', '2']} >
        <Collapse.Panel header='Sắp xếp thep giá'>
          <div >
            <Radio.Group onChange={(e) => productSort(e.target.value)} defaultValue={'aaaa'}>
              <Radio className='text-white' value='asc'>Nhỏ nhất</Radio>
              <Radio className='text-white' value='desc'>Lớn nhất</Radio>
              <Radio className='text-white' value=''>Mặc định</Radio>
            </Radio.Group>
          </div>
        </Collapse.Panel>
        <Collapse.Panel header='Loại sản phẩm'>
          <Radio.Group
            className='text-white flex flex-col gap-2'
            onChange={(e) => productCategory(e.target.value)}
            defaultValue={'aaaa'}
          >
            {categoryProduct?.map((item, index) => (
              <Radio
                key={index}
                value={item?.key}
              // onChange={handleGetCategory}
              >
                <span className='text-white'>{item?.name}</span>
              </Radio>
            ))}
          </Radio.Group>
        </Collapse.Panel>
      </Collapse>
    </div>
  )

};

export default FilterProduct;