
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Eye, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FormManager = () => {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "I'm interested in your SEO services. Can you provide more information about your packages?",
      formType: "Contact Form",
      submittedAt: "2024-01-15 14:30",
      status: "new"
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah.chen@company.com",
      message: "We need a complete website redesign for our e-commerce business. Please contact us to discuss.",
      formType: "Contact Form",
      submittedAt: "2024-01-15 11:45",
      status: "replied"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@startup.sg",
      message: "Looking for digital marketing services for our startup. Can we schedule a consultation?",
      formType: "Contact Form",
      submittedAt: "2024-01-14 16:20",
      status: "new"
    },
    {
      id: 4,
      name: "Lisa Wong",
      email: "lisa.wong@business.com",
      message: "Interested in your paid advertising services. What platforms do you work with?",
      formType: "Contact Form",
      submittedAt: "2024-01-14 09:15",
      status: "in-progress"
    }
  ]);

  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubmissions = submissions.filter(submission =>
    submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-green-500";
      case "replied":
        return "bg-blue-500";
      case "in-progress":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setSubmissions(submissions.map(sub =>
      sub.id === id ? { ...sub, status: newStatus } : sub
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Form Manager</h1>
          <p className="text-gray-600 mt-2">Manage form submissions and inquiries</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{submissions.length}</p>
                <p className="text-sm text-gray-600">Total Submissions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {submissions.filter(s => s.status === 'new').length}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold">{submissions.filter(s => s.status === 'new').length}</p>
                <p className="text-sm text-gray-600">New</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {submissions.filter(s => s.status === 'in-progress').length}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold">{submissions.filter(s => s.status === 'in-progress').length}</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {submissions.filter(s => s.status === 'replied').length}
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold">{submissions.filter(s => s.status === 'replied').length}</p>
                <p className="text-sm text-gray-600">Replied</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Form Submissions</CardTitle>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Form Type</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium">{submission.name}</TableCell>
                  <TableCell>{submission.email}</TableCell>
                  <TableCell>{submission.formType}</TableCell>
                  <TableCell>{submission.submittedAt}</TableCell>
                  <TableCell>
                    <Badge 
                      className={`${getStatusColor(submission.status)} text-white`}
                    >
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedSubmission(submission)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Form Submission Details</DialogTitle>
                        </DialogHeader>
                        {selectedSubmission && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <p className="text-sm bg-gray-50 p-2 rounded">{selectedSubmission.name}</p>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <p className="text-sm bg-gray-50 p-2 rounded">{selectedSubmission.email}</p>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-1">Message</label>
                              <p className="text-sm bg-gray-50 p-3 rounded h-32 overflow-y-auto">
                                {selectedSubmission.message}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium mb-1">Form Type</label>
                                <p className="text-sm bg-gray-50 p-2 rounded">{selectedSubmission.formType}</p>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Submitted At</label>
                                <p className="text-sm bg-gray-50 p-2 rounded">{selectedSubmission.submittedAt}</p>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium mb-2">Update Status</label>
                              <div className="flex space-x-2">
                                <Button 
                                  size="sm" 
                                  variant={selectedSubmission.status === 'new' ? 'default' : 'outline'}
                                  onClick={() => handleStatusChange(selectedSubmission.id, 'new')}
                                >
                                  New
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant={selectedSubmission.status === 'in-progress' ? 'default' : 'outline'}
                                  onClick={() => handleStatusChange(selectedSubmission.id, 'in-progress')}
                                >
                                  In Progress
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant={selectedSubmission.status === 'replied' ? 'default' : 'outline'}
                                  onClick={() => handleStatusChange(selectedSubmission.id, 'replied')}
                                >
                                  Replied
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormManager;
