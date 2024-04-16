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
            <Head title="Edit Category" />
p
            <form
                className="p-5 w-[80%] mx-auto"
                onSubmit=""
            >
                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value=""
                        className="mt-1 block w-full"
                        autoComplete="username"
                        required
                    />

                    <InputError message="" className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <LinkPrimaryButton
                        className="ms-4"
                    >
                        Back
                    </LinkPrimaryButton>
                    <PrimaryButton className="ms-4" disabled="">
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
