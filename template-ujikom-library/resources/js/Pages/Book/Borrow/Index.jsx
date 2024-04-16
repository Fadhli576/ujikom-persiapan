import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import LinkPrimaryButton from "@/Components/LinkPrimaryButtonL";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index() {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Borrowed Book
                </h2>
            }
        >
            <Head title="Borrowed Book" />

            <div className="p-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {(auth.user.role == "admin" ||
                        auth.user.role == "petugas") && (
                        <div className="flex justify-between">
                            <form
                                action=""
                                method="get"
                            >
                                <PrimaryButton type="submit" className="my-5">
                                    PDF Report
                                </PrimaryButton>
                            </form>
                            <form
                                action=""
                                method="get"
                            >
                                <SecondaryButton type="submit" className="my-5">
                                    Excel Report
                                </SecondaryButton>
                            </form>
                        </div>
                    )}
                    <table className="table-auto text-white bg-slate-800 rounded w-full text-center">
                        <thead className="bg-slate-700 rounded font-extrabold h-10">
                            <tr>
                                <th>No</th>
                                <td>Borrower</td>
                                <th>Book</th>
                                <th>Borrowed At</th>
                                <th>Returned At</th>
                                <td>Status</td>
                                {auth.user.role == "user" ? (
                                    <th>Action</th>
                                ) : (
                                    ""
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {loans &&
                                loans.map((loan, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>                      <td>{loan.user.name}</td>
                                        <td>{loan.book.title}</td>
                                        <td>{loan.loaned_at}</td>
                                        <td>
                                            {loan.returned_at
                                                ? loan.returned_at
                                                : "-"}
                                        </td>
                                        <td>{loan.status}</td>
                                        {auth.user.role == "user" ? (
                                            <td>
                                                {loan.status == "returned" ? (
                                                    <h4>Returned</h4>
                                                ) : (
                                                    <PrimaryButton
                                                       
                                                    >
                                                        Return
                                                    </PrimaryButton>
                                                )}
                                            </td>
                                        ) : (
                                            ""
                                        )}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
