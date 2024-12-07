import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoTwitter, IoStar, IoIosStarOutline } from "react-icons/io";

const Apple = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://online-market-server-rosy.vercel.app/fruits')
            .then(res => res.json())
            .then(data => {
                const appleItem = data.find(fruit => fruit.name.trim() === 'Apple');
                setItems(appleItem);
            });
    }, []);

    console.log('Current Items state:', items);

    return (
        <div>
            {items ? (
                <section className="bg-white shadow-sm rounded-xl p-6 mb-6 flex justify-between">
                    <div className="py-16 px-10 space-y-5">
                        <div className="w-8 h-8 rounded-full bg-[#2684fc] flex justify-center items-center">
                            <Link to="#"><FaFacebook className="text-xl text-white" /></Link>
                        </div>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#0a66c2]">
                            <Link to="#"><GrLinkedinOption className="text-xl text-white" /></Link>
                        </div>

                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#8dcff8]">
                            <Link to="#"><IoLogoTwitter className="text-xl text-white" /></Link>
                        </div>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#e55425]">
                            <Link to="#"><FaInstagram className="text-xl text-white" /></Link>
                        </div>
                    </div>
                    <div>
                        <div className="md:flex justify-between ">
                            <div className="w-1/2">
                                <h1 className="text-5xl font-bold mb-6">Health Benefits of an Avocado</h1>
                                <div className="pb-2">
                                    <h3 className="text-xl font-bold my-1">Rich in Nutrients</h3>
                                    <p>{items.description}</p>
                                </div>
                                <div className="pb-2">
                                    <h3 className="text-xl font-bold my-1">Improves Eye Health</h3>
                                    <p>{items.description}</p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img
                                    src={items.image}
                                    alt={items.name}
                                    className="rounded-md mb-4 h-80 float-right"
                                />
                            </div>
                        </div>
                        <div className="py-5">
                            <h1 className="text-xl font-bold pb-2">Natural Energy Booster</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque quae optio nihil pariatur fugiat labore voluptas ratione molestias velit omnis nobis enim, quibusdam quos. Dolores, corporis voluptates. Accusamus, eligendi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque quae optio nihil pariatur fugiat labore voluptas ratione molestias velit omnis nobis enim, quibusdam quos. Dolores, corporis voluptates. Accusamus, eligendi!</p>
                        </div>
                        <div className="md:flex justify-between ">
                            <div className="w-1/2">
                                <img
                                    src={items.image}
                                    alt={items.name}
                                    className="rounded-3xl mb-4 h-80 float-start "
                                />
                            </div>
                            <div className="w-1/2 py-16">
                                <h1 className="text-xl font-bold mb-2">Boosts Immunity</h1>
                                <h3>Rich in Nutrients</h3>
                                <p>{items.description}</p>
                            </div>
                        </div>
                        <div className="py-8">
                            <h2 className="text-xl font-bold mb-2">Was this helpful?</h2>
                            <div className="flex gap-4 py-2">
                                <span><IoStar className="text-xl text-orange-600" /></span>
                                <span><IoStar className="text-xl text-orange-600" /></span>
                                <span><IoStar className="text-xl text-orange-600" /></span>
                                <span><IoStar className="text-xl text-orange-600" /></span>
                                <span><IoIosStarOutline className="text-xl text-orange-600" /></span>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Apple;