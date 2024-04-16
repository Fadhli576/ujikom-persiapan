import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Index() {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Book List
                </h2>
            }
        >
            <Head title="List of Books" />

            <div className="p-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-6 gap-y-20 justify-items-center">
                        {books &&
                            books.map((book, index) => (
                                <Link
                                    href={route("book.detail", book.id)}
                                    className="bg-gray-800 w-[300px]"
                                    key={index}
                                >
                                    <img
                                        className="min-h-[400px]"
                                        src={`images/${book.cover_image}`}
                                        alt={book.cover_image}
                                    />
                                    <div className="text-white p-2 text-wrap flex text-xl justify-between">
                                        <div className="font-extrabold">
                                            {book.title}
                                        </div>
                                        <div className="text-yellow-300 flex">
                                            <StarIcon
                                                className={`h-4 w-4 $
                                                        ? "text-yellow-400"
                                                        : "text-white"
                                                }`}
                                            />
                                            <StarIcon
                                                className={`h-4 w-4
                                                        ? "text-yellow-400"
                                                        : "text-white"
                                                }`}
                                            />
                                            <StarIcon
                                                className={`h-4 w-4
                                                        ? "text-yellow-400"
                                                        : "text-white"
                                                }`}
                                            />
                                            <StarIcon
                                                className={`h-4 w-4
                                                        ? "text-yellow-400"
                                                        : "text-white"
                                                }`}
                                            />
                                            <StarIcon
                                                className={`h-4 w-4 
                                                        ? "text-yellow-400"
                                                        : "text-white"
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
