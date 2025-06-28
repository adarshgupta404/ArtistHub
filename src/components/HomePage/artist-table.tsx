"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { MoreHorizontal, Eye, Check, X, Trash2, MapPin, DollarSign } from "lucide-react"
import { ArtistSubmission } from "@/lib/data/artists"

interface ArtistTableProps {
  artists: ArtistSubmission[]
  loading: boolean
  onStatusUpdate: (artistId: string, status: ArtistSubmission["status"]) => void
  onDelete: (artistId: string) => void
}

export default function ArtistTable({ artists, loading, onStatusUpdate, onDelete }: ArtistTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [artistToDelete, setArtistToDelete] = useState<string | null>(null)

  const handleDeleteClick = (artistId: string) => {
    setArtistToDelete(artistId)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (artistToDelete) {
      onDelete(artistToDelete)
      setDeleteDialogOpen(false)
      setArtistToDelete(null)
    }
  }

  const getStatusBadge = (status: ArtistSubmission["status"]) => {
    const variants = {
      pending: { variant: "secondary" as const, className: "bg-yellow-100 text-yellow-800" },
      approved: { variant: "secondary" as const, className: "bg-green-100 text-green-800" },
      rejected: { variant: "secondary" as const, className: "bg-red-100 text-red-800" },
    }

    return <Badge {...variants[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
  }

  const formatFeeRange = (feeRange: string) => {
    return feeRange.replace(/\$/g, "$")
  }

  // Loading state
  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-4 p-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <Skeleton className="h-8 w-[100px]" />
            <Skeleton className="h-8 w-8" />
          </div>
        ))}
      </div>
    )
  }

  // Empty state
  if (artists.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Eye className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
        <p className="text-gray-500">No artist submissions match your current filters.</p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artist</TableHead>
              <TableHead>Categories</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Fee Range</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artists.map((artist) => (
              <TableRow key={artist.id} className="hover:bg-gray-50 group">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 text-white rounded-full flex items-center justify-center font-medium">
                      {artist.name?.charAt(0) || "?"}
                    </div>
                    <div>
                      <div className="font-medium group-hover:dark:text-black">{artist.name || "Unknown"}</div>
                      <div className="text-sm text-gray-500">{artist.email || "No email"}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {(artist.categories || []).slice(0, 2).map((category) => (
                      <Badge key={category} variant="outline" className="text-xs group-hover:dark:border-gray-600 group-hover:dark:text-black">
                        {category}
                      </Badge>
                    ))}
                    {(artist.categories || []).length > 2 && (
                      <Badge variant="outline" className="text-xs group-hover:dark:text-black">
                        +{(artist.categories || []).length - 2}
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-sm group-hover:dark:text-black">
                    <MapPin className="h-3 w-3" />
                    {artist.city}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 group-hover:dark:text-black text-sm font-medium">
                    <DollarSign className="h-3 w-3" />
                    {formatFeeRange(artist.feeRange)}
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(artist.status)}</TableCell>
                <TableCell className="text-sm text-gray-500">
                  {new Date(artist.submittedAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      {artist.status === "pending" && (
                        <>
                          <DropdownMenuItem
                            onClick={() => onStatusUpdate(artist.id, "approved")}
                            className="text-green-600"
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => onStatusUpdate(artist.id, "rejected")}
                            className="text-red-600"
                          >
                            <X className="mr-2 h-4 w-4" />
                            Reject
                          </DropdownMenuItem>
                        </>
                      )}
                      {artist.status !== "pending" && (
                        <DropdownMenuItem
                          onClick={() => onStatusUpdate(artist.id, "pending")}
                          className="text-yellow-600"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Mark as Pending
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={() => handleDeleteClick(artist.id)} className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the artist submission.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
