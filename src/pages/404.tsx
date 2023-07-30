import notFountImage from '@/assets/images/not_found.png'
import Image from "next/image";
import {useRouter} from "next/router";

const NotFound = () => {
    const {push} = useRouter()
    setTimeout(async () => await push('/'), 3000)
    return (
        <div className={'w-screen h-screen flex justify-center items-center'}>
            <Image src={notFountImage} alt={'not found'} width={500} height={500}/>
        </div>
    );
};

export default NotFound;
