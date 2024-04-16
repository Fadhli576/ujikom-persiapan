import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import LinkPrimaryButton from "@/Components/LinkPrimaryButtonL";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function EditUser() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Book
                </h2>
            }
        >
            <Head title="Edit Book" />

            <form
                className="p-5 w-[80%] mx-auto"
                onSubmit=""
            >
                <div>
                    <InputLabel htmlFor="cover_image" value="Cover Image" />
                    <img
                        width={200}
                        src={`../images/${book.cover_image}`}
                        alt={book.cover_image}
                    />
                    <TextInput
                        id="cover_image"
                        name="cover_image"
                        type="file"
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) =>
                            setData("cover_image", e.target.files[0])
                        }
                    />

                    <InputError message={errors.cover_image} className="mt-2" />
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

                    <InputError message="" className="mt-2" />
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
                        autoComplete="publication_year"
                        required
                    />

                    <InputError
                        message=""
                        className="mt-2"
                    />

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="category_id"
                            value="Book Categories"
                        />

                        <select
                            defaultValue=""
                            name="category_id"
                            id=""
                        >
                            <option value="" disabled>
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
                </div>

                <div className="flex items-center justify-end mt-4">
                    <LinkPrimaryButton
                        className="ms-4"
                    >
                        Back
                    </LinkPrimaryButton>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
