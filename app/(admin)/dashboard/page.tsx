import prisma from "@/lib/prisma";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Show } from "react-smart-conditional";
import { EmptyState } from "@/components/empty-state";
import { Inbox } from "lucide-react";


export default async function Page() {
  const waitlists = (await prisma.waitlist.findMany()).reverse();

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-8">Waitlist</h1>
      <Show >
        <Show.If condition={waitlists.length === 0} className="bg-white">
          <EmptyState
            icon={Inbox}
            title="No waitlists"
            description="There are no schools on the waitlist."
          />
        </Show.If>
        <Show.Else>
          <Table>
            <TableCaption className="hidden">
              A list of schools on the waitlist.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>School Name</TableHead>
                <TableHead>Contact Name</TableHead>
                <TableHead>Contact Email</TableHead>
                <TableHead className="text-right">Contact Phone No</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {waitlists.map((w) => (
                <TableRow key={w.email}>
                  <TableCell className="font-medium">{w.school}</TableCell>
                  <TableCell>{w.name}</TableCell>
                  <TableCell>{w.email}</TableCell>
                  <TableCell className="text-right">{w.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Show.Else>
      </Show>
    </div>
  );
}
