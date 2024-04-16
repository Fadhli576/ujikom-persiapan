import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import RadioInput from "@/Components/RadioInput";
import { ArrowLongLeftIcon, StarIcon } from "@heroicons/react/24/solid";

export default function Detail() {
    const [showModal, setShowModal] = useState(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex items-center gap-2">
                    <Link href={route("book-list.index")}>
                        <ArrowLongLeftIcon className="h-6 w-6" />
                    </Link>
                    Detail
                </h2>
            }
        >
            <Head title={`Detail of`} />

            <div className="p-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-800 w-full p-10">
                        <div className="flex gap-5">
                            <img
                                width={500}
                                src={`../images/${book.cover_image}`}
                                alt={book.cover_image}
                            />
                            <div className="">
                                <div className="text-white">
                                    <h4 className="text-4xl font-bold mb-5">
                                    </h4>
                                    <h4>
                                        Written by & Published by
                                    </h4>
                                </div>
                                <div className="mt-10 flex gap-5">
                                    <PrimaryButton
                                        disabled=""
                                        onClick=""
                                    >
                                        Borrow
                                    </PrimaryButton>
                                    <SecondaryButton
                                        disabled=""
                                        onClick=""
                                    >
                                        Add to Wishlist
                                    </SecondaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 bg-gray-800 p-10 font-bold">
                        <div className="flex justify-between">
                            <h4 className="text-4xl text-white">Review</h4>
                            <PrimaryButton
                                onClick={() => setShowModal(true)}
                                disabled=""
                            >
                                Add Review
                            </PrimaryButton>
                        </div>
                        <div className=" text-white my-5">
                            {book.reviews.length > 0 ? (
                                book.reviews.map((review, index) => (
                                    <div
                                        className="bg-gray-900 p-5 mt-3"
                                        key={index}
                                    >
                                        <h4 className="text-yellow-400">
                                            <div className="flex">
                                                <StarIcon
                                                    className={`h-4 w-4 ${
                                                        review.rating >= 1
                                                            ? "text-yellow-400"
                                                            : "text-white"
                                                    }`}
                                                />
                                                <StarIcon
                                                    className={`h-4 w-4 ${
                                                        review.rating >= 2
                                                            ? "text-yellow-400"
                                                            : "text-white"
                                                    }`}
                                                />
                                                <StarIcon
                                                    className={`h-4 w-4 ${
                                                        review.rating >= 3
                                                            ? "text-yellow-400"
                                                            : "text-white"
                                                    }`}
                                                />
                                                <StarIcon
                                                    className={`h-4 w-4 ${
                                                        review.rating >= 4
                                                            ? "text-yellow-400"
                                                            : "text-white"
                                                    }`}
                                                />
                                                <StarIcon
                                                    className={`h-4 w-4 ${
                                                        review.rating >= 5
                                                            ? "text-yellow-400"
                                                            : "text-white"
                                                    }`}
                                                />
                                            </div>
                                        </h4>
                                        <h4 className="text-xl">
                                            {review.user.username}
                                        </h4>
                                        <p className="text-wrap">
                                            {review.content}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <h4>No Review</h4>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Add Review" show={showModal} closeable>
                <div className="flex justify-between text-white p-5">
                    <h4 className="font-bold text-xl">
                        Add Review for
                    </h4>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <form className="p-5" onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="content" value="Content" />

                        <TextInput
                            id="content"
                            name="content"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="content"
                            isFocused={true}
                            onChange={(e) => setData("content", e.target.value)}
                            required
                        />

                        <InputError message="" className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="rating" value="Rating" />
                        <div className="mt-4 flex items-center">
                            <RadioInput
                                id="rate_1"
                                name="rating"
                                value={1}
                                className="m-1 block"
                                autoComplete="rating"
                                required
                            />

                            <InputLabel
                                className="mr-3"
                                htmlFor="rate_1"
                                value="1"
                            />

                            <RadioInput
                                id="rate_2"
                                name="rating"
                                value={2}
                                className="m-1 block"
                                autoComplete="rating"
                                required
                            />

                            <InputLabel
                                className="mr-3"
                                htmlFor="rate_2"
                                value="2"
                            />

                            <RadioInput
                                id="rate_3"
                                name="rating"
                                value={3}
                                className="m-1 block"
                                autoComplete="rating"
                                required
                            />

                            <InputLabel
                                className="mr-3"
                                htmlFor="rate_3"
                                value="3"
                            />

                            <RadioInput
                                id="rate_4"
                                name="rating"
                                value={4}
                                className="m-1 block"
                                autoComplete="rating"
                                required
                            />

                            <InputLabel
                                className="mr-3"
                                htmlFor="rate_4"
                                value="4"
                            />

                            <RadioInput
                                id="rate_5"
                                name="rating"
                                value={5}
                                className="m-1 block"
                                autoComplete="rating"
                                required
                            />

                            <InputLabel
                                className="mr-3"
                                htmlFor="rate_5"
                                value="5"
                            />
                            <InputError
                                message=""
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton type="submit" className="ms-4" disabled="">
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
