<?php

namespace App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'max:255'],
            'description' => ['required'],
            'body' => ['required'],
            'price' => ['required', 'numeric'],
            'measure' => ['required'],
            'cover' => ['required']
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'Bạn chưa nhập tên sản phẩm',
            'name.max' => 'Tên sản phẩm quá dài (phải nhỏ hơn 255 kí tự)',
            'body.required'  => 'Bạn chưa nhập chi tiết bài viết',
            'description.required' => 'Bạn phải nhập mô tả cho sản phẩm',
            'price.required' => 'Bạn phải nhập giá sản phẩm',
            'price.number' => 'Giá sản phẩm phải là số',
            'measure.required' => 'Bạn chưa nhập đơn vị tính cho sản phẩm',
            'cover.required' => 'bạn chưa chọn ảnh đại diện'
        ];
    }
}
