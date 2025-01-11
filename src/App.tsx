import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
const queryClient = new QueryClient();



const App = () => (
 <QueryClientProvider client={queryClient}>
   <TooltipProvider>
     <Toaster />
     <Sonner />
     <BrowserRouter>
</BrowserRouter>
   </TooltipProvider>
 </QueryClientProvider>
);



export default App;
