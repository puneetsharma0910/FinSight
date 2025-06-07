"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { categoryColors } from "@/data/categories";
import { format } from "date-fns";
import React from "react";

const TransactionTable = ({ transactions }) => {
  const filteredAndSortedTransactions = transactions; // Placeholder for actual filtering and sorting logic
  const handleSort = () => {};
  return (
    <div className="space-y-4">
      {/* filters */}

      {/* transactions */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">Date</div>
              </TableHead>
              <TableHead className="w-[50px]">Description</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("category")}
              >
                <div className="flex items-center">Category</div>
              </TableHead>

              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("amount")}
              >
                Recurring
              </TableHead>

              <TableHead className="w-[50px]">Description</TableHead>

              <TableHead className />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedTransactions.length === 0 ? (
              <TableRow>
                <TableCell
                  className="text-center text-muted-foreground"
                  colSpan={7}
                >
                  No transactions found
                </TableCell>
              </TableRow>
            ) : (
              filteredAndSortedTransactions.map((transaction) => (
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {" "}
                    {format(new Date(transaction.date), "PP")}
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="capitalize">
                    <span
                    className="px-2 py-1 rounded text-white text-sm "
                    style={{
                        background:categoryColors[transaction.category] 
                    }}
                    >{transaction.category}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    {transaction.tyoe === "EXPENSE" ? "-" : "+"}
                    
                    
                    ${transaction.amount.toFixed(2)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
