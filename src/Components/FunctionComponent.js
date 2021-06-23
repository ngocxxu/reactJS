import React from 'react'

//cú pháp tạo function component: rft

//tạo ra 1 thẻ <FunctionComponent>
export default function FunctionComponent() {

    //lệnh return chứa giao diện của thẻ. Lưu ý giao diện thẻ phải dc bao phủ bởi 1 thẻ duy nhất(thường là thẻ div)
    return (
        <section className='p-2 bg-dark m-2 text-white'>
            <div className="text-white display-4">Title</div>
            <div>
                content content
            </div>
        </section>
    )
}
