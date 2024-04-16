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
                    User
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
                                <th>Name</th>
                                <th>Username</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <div className="flex gap-5 justify-center flex-wrap">
                                                <LinkPrimaryButton
                                                    href={route(
                                                        "user.edit",
                                                        user.id
                                                    )}
                                                >
                                                    <PencilIcon className="h-5 w-5" />
                                                </LinkPrimaryButton>
                                                <DangerButton
                                                    onClick={() =>
                                                        deleteSelected(user.id)
                                                    }
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
            <Modal title="Create User" show={showModal} closeable>
                <div className="flex justify-between text-white p-5">
                    <h4 className="font-bold text-xl">Modal User</h4>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>
                <form className="p-5">
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

                        <InputError message="" className="mt-2" />
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

                        <InputError
                            message=""
                            className="mt-2"
                        />
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

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            required
                        />

                        <InputError
                            message=""
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value=""
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
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
