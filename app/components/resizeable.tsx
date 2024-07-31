import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableDemo() {
  return (
    <div className="container p-5">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[500px] items-center justify-center p-6 mx-auto">
            <span className="font-semibold">Notflix</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <img
                  alt="gallery"
                  className=" object-cover object-center block opacity-25 w-full h-full inset-0"
                  src="/assets/drums_01.jpg"
                />
                <span className="font-semibold">Fifth Floor</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">SoundLibrary</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
