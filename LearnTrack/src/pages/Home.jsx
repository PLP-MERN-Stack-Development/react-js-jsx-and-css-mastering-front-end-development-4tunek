import Layout from "../components/Layout";
import Card from "../components/ui/Card";
import Button from "../components/Button";


export default function Home() {
  return (
    <Layout>
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Welcome to our Home Page, please explore!</h1>
        <Card title="Quick Actions" className="max-w-md mx-auto">
          <div className="flex justify-center gap-4">
            <Button variant="primary">Save</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}










