"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArtistTable from "@/components/HomePage/artist-table";
import {
  mockArtistSubmissions,
  type ArtistSubmission,
} from "@/lib/data/artists";
import Navbar from "@/components/HomePage/navbar";

export default function ManagerDashboard() {
  const [artists, setArtists] = useState<ArtistSubmission[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<ArtistSubmission[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Simulate API call
  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setArtists(mockArtistSubmissions);
      setFilteredArtists(mockArtistSubmissions);
      setLoading(false);
    };

    fetchArtists();
  }, []);

  // Filter artists based on search and filters
  useEffect(() => {
    let filtered = artists;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.categories?.some((cat: string) =>
            cat?.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((artist) => artist.status === statusFilter);
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((artist) =>
        artist.categories?.some((cat) =>
          cat?.toLowerCase().includes(categoryFilter.toLowerCase())
        )
      );
    }

    setFilteredArtists(filtered);
  }, [artists, searchTerm, statusFilter, categoryFilter]);

  const handleStatusUpdate = (
    artistId: string,
    newStatus: ArtistSubmission["status"]
  ) => {
    setArtists((prev) =>
      prev.map((artist) =>
        artist.id === artistId ? { ...artist, status: newStatus } : artist
      )
    );
  };

  const handleDelete = (artistId: string) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== artistId));
  };

  const getStatusCounts = () => {
    return {
      total: artists?.length || 0,
      pending: artists?.filter((a) => a?.status === "pending")?.length || 0,
      approved: artists?.filter((a) => a?.status === "approved")?.length || 0,
      rejected: artists?.filter((a) => a?.status === "rejected")?.length || 0,
    };
  };

  const statusCounts = getStatusCounts();
  const uniqueCategories = Array.from(
    new Set(artists?.flatMap((a) => a?.categories || []) || [])
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl py-4 mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold ">Manager Dashboard</h1>
            <p className=" mt-1">Manage artist submissions and applications</p>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium ">
                    Total Submissions
                  </p>
                  <p className="text-2xl font-bold ">
                    {statusCounts.total}
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium ">
                    Pending Review
                  </p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {statusCounts.pending}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  {statusCounts.pending}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium ">Approved</p>
                  <p className="text-2xl font-bold text-green-600">
                    {statusCounts.approved}
                  </p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  {statusCounts.approved}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium ">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">
                    {statusCounts.rejected}
                  </p>
                </div>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  {statusCounts.rejected}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
            <CardDescription>
              Filter and search through artist submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, city, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {uniqueCategories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Artist Table */}
        <Card>
          <CardHeader>
            <CardTitle>Artist Submissions</CardTitle>
            <CardDescription>
              {filteredArtists.length} of {artists.length} submissions
              {searchTerm && ` matching "${searchTerm}"`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ArtistTable
              artists={filteredArtists}
              loading={loading}
              onStatusUpdate={handleStatusUpdate}
              onDelete={handleDelete}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
