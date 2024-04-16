import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import LinkPrimaryButton from "@/Components/LinkPrimaryButtonL";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function EditUser() {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit User
                </h2>
            }
        >
                        <Head title="Edit User" />

            <form
                className="p-5 w-[80%] mx-auto"
            >
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value=""
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        required
                    />

                    <InputError className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="username" value="Username" />

                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value=""
                        className="mt-1 block w-full"
                        autoComplete="username"
                        required
                    />

                    <InputError message={errors.username} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="address" value="Address" />

                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value=""
                        className="mt-1 block w-full"
                        autoComplete="username"
                        required
                    />

                    <InputError message="" className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value=""
                        className="mt-1 block w-full"
                        autoComplete="username"
                        required
                    />

                    <InputError message="" className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <LinkPrimaryButton
                        href=""
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
