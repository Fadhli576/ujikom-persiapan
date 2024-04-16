import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";
import LinkPrimaryButton from "@/Components/LinkPrimaryButtonL";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Index() {
    const [showModal, setShowModal] = useState(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Book
                </h2>
            }
        >
            <Head title="User" />

            <div className="p-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between my-5">
                        <PrimaryButton onClick={() => setShowModal(true)}>
                            Create +
                        </PrimaryButton>
                    </div>
                    <table className="table-auto text-white bg-slate-800 rounded w-full text-center">
                        <thead className="bg-slate-700 rounded font-extrabold h-10">
                            <tr>
                                <th>No</th>
                                <th>Cover</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Publisher</th>
                                <th>Publication Year</th>
                                <th>Book Category</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books &&
                                books.map((book, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="flex justify-center m-2">
                                            <img
                                                width={150}
                                                src={`/images/${book.cover_image}`}
                                                alt={book.cover_image}
                                            />
                                        </td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.publication_year}</td>
                                        <td>
                                            {book.book_category_relation
                                                ? book.book_category_relation
                                                      .category.name
                                                : "-"}
                                        </td>
                                        <td>
                                            {book.loans.length > 0
                                                ? book.loans[
                                                      book.loans.length - 1
                                                  ].status == "loaned"
                                                    ? book.loans[
                                                          book.loans.length - 1
                                                      ].status
                                                    : "Available"
                                                : "Available"}
                                        </td>
                                        <td>
                                            <div className="flex gap-5 justify-center flex-wrap">
                                                <LinkPrimaryButton

                                                >
                                                    <PencilIcon className="h-5 w-5" />
                                                </LinkPrimaryButton>
                                                <DangerButton

                                                >
                                                    <TrashIcon className="h-5 w-5" />
                                                </DangerButton>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal title="Create Book" show={showModal} closeable>
                <div className="flex justify-between text-white p-5">
                    <h4 className="font-bold text-xl">Modal User</h4>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <form className="p-5" onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="cover_image" value="Cover Image" />

                        <TextInput
                            id="cover_image"
                            name="cover_image"
                            type="file"
                            className="mt-1 block w-full"
                            isFocused={true}
                            required
                        />

                        <InputError
                            message=""
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="title" value="Title" />

                        <TextInput
                            id="title"
                            name="title"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="title"
                            isFocused={true}
                            required
                        />

                        <InputError message="" className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="author" value="Author" />

                        <TextInput
                            id="author"
                            type="text"
                            name="author"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="author"
                            required
                        />

                        <InputError message="" className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="publisher" value="Publisher" />

                        <TextInput
                            id="publisher"
                            type="text"
                            name="publisher"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="username"
                            required
                        />

                        <InputError
                            message=""
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="publication_year"
                            value="Publication Year"
                        />

                        <TextInput
                            id="publication_year"
                            type="number"
                            name="publication_year"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="username"
                            required
                        />

                        <InputError
                            message=""
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="category_id"
                            value="Book Categories"
                        />

                        <select
                            name="category_id"
                            id=""
                        >
                            <option value="" selected disabled>
                                Select Categories
                            </option>
                            {bookCategories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>

                        <InputError
                            message=""
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled="">
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
