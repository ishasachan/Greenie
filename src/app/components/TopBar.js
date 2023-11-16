import Link from 'next/link';
import Image from 'next/image';

const TopBar = () => {
    return (
        <div className="px-4 mt-4">
            <div className="flex justify-between mb-4 py-6 bg-white shadow-md rounded-md">
            <Image src="/logo.png" alt="greenie" width={128} height={40} priority={true}/>

                <div className="flex px-4 space-x-3">
                    <Link href="/">
                        <button className={`px-4 py-2 rounded-md bg-gray-100 text-gray-700`}>
                            Users
                        </button>
                    </Link>
                    <Link href="/create">
                        <button className={`px-4 py-2 rounded-md bg-green-700 text-white`}>
                            Create
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar