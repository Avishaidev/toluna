import React, {useEffect} from 'react';
import styles from './Img.module.css';
import imgPlaceholder from '../../assets/imgs/img-placeholder.png';

interface ImgProps {
    imageUrl?:string,
    allowSelectImage: boolean,
    handleImageChange?(imageUrl:string): void
}

const Img:React.FC<ImgProps> = ({ imageUrl = '' , handleImageChange, allowSelectImage}) => {
    const [img, setImg] = React.useState(imageUrl);

    const imageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files?.length) {
            const file = event.target.files[0];
            convertFileToBlobUrl(file).then((fileUrl:string) => {
                setImg(fileUrl);
                if (handleImageChange) {
                    handleImageChange(fileUrl);
                }
            }, () => {
                setImg('');
                if (handleImageChange) {
                    handleImageChange('');
                }
            })
        }
    }

    const convertFileToBlobUrl = (file:File):Promise<string> => {
        return new Promise(((resolve, reject) => {
            const fr:FileReader = new FileReader();

            fr.readAsArrayBuffer(file);

            fr.onload = () => {
                const blob = new Blob([fr.result as BlobPart]);
                const url = URL.createObjectURL(blob);
                resolve(url);
            }

            fr.onerror = () => {
                reject();
            }
        }))
    }

    useEffect(() => {
        if (imageUrl === '' && img !== '') {
            setImg('');
        }
    }, [imageUrl, setImg]);
    return (
        <div className={img ? styles.Img + ' ' + styles.HasImage : styles.Img}>
            <img alt={'answer'} src={img ? img : imgPlaceholder} className={styles.Image} />
            {
                allowSelectImage &&
                    <input type={'file'} accept={'image/*'} className={styles.FileInput} onChange={imageChange}/>
            }

        </div>
    )
};

export default Img;
