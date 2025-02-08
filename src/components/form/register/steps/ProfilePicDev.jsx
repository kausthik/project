import React, { useState, useRef } from 'react';
import { RxAvatar } from 'react-icons/rx';

function ProfilePicDev({ formdata, setFormData }) {
	const [image, setImage] = useState(null);
	const hiddenFileInput = useRef(null);
	const formData = new FormData();

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		const imgname = event.target.files[0].name;
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			const img = new Image();
			img.src = reader.result;
			img.onload = () => {
				const canvas = document.createElement('canvas');
				const maxSize = Math.max(img.width, img.height);
				canvas.width = maxSize;
				canvas.height = maxSize;
				const ctx = canvas.getContext('2d');
				ctx.drawImage(
					img,
					(maxSize - img.width) / 2,
					(maxSize - img.height) / 2
				);
				canvas.toBlob(
					(blob) => {
						const file = new File([blob], imgname, {
							type: 'image/png',
							lastModified: Date.now(),
						});

						console.log('file came--', file);
						setImage(file);
					},
					'image/jpeg',
					0.8
				);
			};
		};
	};

	const handleUploadButtonClick = () => {
		if (image) {
			console.log('hiiii', image);
		}
	};

	const handleClick = () => {
		hiddenFileInput.current.click();
	};

	return (
		<div className='flex w-full justify-center'>
			<div className='box-decoration w-full py-6'>
				<label
					htmlFor='image-upload-input'
					className='image-upload-label'
				>
					{image ? image.name : 'Choose an image'}
				</label>
				<div
					onClick={handleClick}
					style={{ cursor: 'pointer' }}
				>
					{image ? (
						<img
							src={URL.createObjectURL(image)}
							alt='upload image'
							className='img-display-after'
						/>
					) : (
						<RxAvatar className='w-40 h-40 text-accent' />
					)}

					<input
						id='image-upload-input'
						type='file'
						onChange={handleImageChange}
						ref={hiddenFileInput}
						style={{ display: 'none' }}
					/>
				</div>
			</div>
			<button
				className='text-lg px-6 py-2 bg-white border my-3 border-accent rounded-lg 
					font-medium hover:bg-accent hover:text-white transition'
				onClick={() => handleUploadButtonClick()}
			>
				Upload
			</button>
		</div>
	);
}

export default ProfilePicDev;
